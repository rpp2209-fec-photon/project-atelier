module.exports = (req, res, next) => {
  console.log('imcoming request type:', req.method);
  console.log('imcoming request url:', req.url);
  next();
};
