Modelimi i të Dhënave

  •	Objektiv: Përfaqësimi i detyrave në MongoDB duke përdorur Mongoose.
  
  •	Implementimi:Është krijuar një model Mongoose për të përfaqësuar detyrat në MongoDB. Kjo përfshin fushat e nevojshme si emri i detyrës, përshkrimi, data e krijimit, prioriteti, statusi, dhe informacione të tjera relevante.
  
  •	Përdorimi i lidhjeve në mes të modeleve për të përfaqësuar marrëdhëniet midis detyrave dhe të tjerëve.
  
  •	Shembull Kode:
  
  const mongoose = require('mongoose');
  const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    priority: { type: Number, default: 1 },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
  });
  
  const Task = mongoose.model('Task', taskSchema);
  module.exports = Task;


Migrimet e Bazës së të Dhënave

•	Objektiv: Menaxhimi i ndryshimeve në skemën e bazës së të dhënave nëpërmjet migrimeve.

•	Implementimi: Është përdorur librarë si "migrate-mongoose" për të krijuar migrime të bazës së të dhënave në MongoDB.

•	Migrimet janë përdorur për të krijuar dhe ndryshuar tabele ose indekse, si dhe për të menaxhuar ndryshime të tjera në skemën e bazës së të dhënave.

•	Shembull Kode (përdorur si komandë bash):

migrate-mongoose create_tasks_table --model Task --collection tasks


API-të dhe Lidhja me Frontend-in

•	Objektiv: Sigurimi i një lidhjeje funksionale midis frontend-it të shkruar në React.js dhe backend-it në Express.js, duke përdorur API-të dhe kërkesat HTTP.

•	Implementimi: Është krijuar një set API-esh në Express.js për të ofruar operacione CRUD (krijimi, leximi, ndryshimi, fshirja) për detyrat.

•	Frontend-i në React.js është lidhur me API-të duke përdorur Axios ose fetch API për të bërë kërkesat HTTP për të lexuar dhe manipuluar të dhënat në bazën e të dhënave.
