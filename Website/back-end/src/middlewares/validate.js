const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false, //jangan berhenti di error pertama
    allowUnknown: false, //properti yang tidak ada di skema dianggap tidak valid
  });

  if (error) return next(error);
  req.validated = value;
  next();
};

export { validate };
