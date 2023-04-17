const FormDat = require('../models/formData')

exports.createCover = (req, res, next) => {
  delete req.body._id
  const newFormData = new FormDat({
    ...req.body,
    image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
  })

  newFormData
    .save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
    .catch((error) => res.status(400).json({ error }))
}

exports.getCover = (req, res, next) => {
  FormDat.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }))
}
