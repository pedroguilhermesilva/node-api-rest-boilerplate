import User from '../models/User';

export default async (req, res, next) => {
  const id = req.userId;

  const user = await User.getUserById(id);

  const { admin } = user.rows[0];

  if (admin === false) {
    return res.status(401).json({ error: 'Permissões insuficientes.' });
  }
  return next();
};
