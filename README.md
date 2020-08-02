Il s'agit d'un site de salle de sport qui propose des abonnements à ses clients.  
Ceux-ci peuvent s'inscrire, payer en ligne, et gérer leurs informations personnelles et de facturation.

## Lancer le serveur

- Installer les node modules avec `npm i`
- Rentrer les secrets keys dans le fichier `.env`
- Lancer le projet avec `npm run dev`
- Ouvrir [http://localhost:3000](http://localhost:3000)

## Informations sur le projet

Des informations pratiques si besoin :

- Changer l'email de contact dans `server/constants/contactEmail.js`
- Changer l'URL du front (pour les emails de reset password) dans `server/constants/clientURL.js`
- Changer l'URL du back (pour les appels API) dans `helpers/baseURL.js`
- Les tarifs sont stockés dans `data/plans.json`
- Toutes les clés secrètes sont à mettre dans un fichier `.env` (voir `.env.exemple` pour la liste);

## En savoir plus

Ce projet a été réalisé avec les ressources suivantes :

- Front-end codé avec [React.js](https://reactjs.org/) et [Next.js](https://nextjs.org/)
- Back-end codé avec [Express.js](https://expressjs.com/fr/)
- [MongoDB](https://www.mongodb.com/) comme base de données (via [Mongoose](https://mongoosejs.com/))
- Paiements gérés avec [Stripe](https://stripe.com/)
- Envois d'email avec [SendGrid](https://sendgrid.com/)

## Live sur O2switch

Le projet est actuellement en déployé en live sur O2switch, vous pouvez le voir à l'adresse suivante : https://sungym69.com.

## TODOs

Une liste de choses à faire :

- Gérer les webhooks stripe avec la business logic
- Importer les tarifs de la page `/tarifs` depuis le fichier `data/plans.json`
- Ajouter suppression de cartes bancaires
