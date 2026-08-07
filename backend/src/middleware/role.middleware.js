// Restrict route access to specific roles, e.g. authorize('doctor', 'admin')
module.exports = function authorize(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ success: false, message: 'Access forbidden: insufficient role' });
    }
    next();
  };
};
