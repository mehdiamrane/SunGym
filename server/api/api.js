// AUTH à importer ???
// import { auth } from './firebase';

// /**
//  * Decodes the JSON Web Token sent via the frontend app
//  * Makes the currentUser (firebase) data available on the body.
//  */
// async function decodeJWT(req: Request, res: Response, next: NextFunction) {
//   if (req.headers?.authorization?.startsWith('Bearer ')) {
//     const idToken = req.headers.authorization.split('Bearer ')[1];

//     try {
//       const decodedToken = await auth.verifyIdToken(idToken);
//       req['currentUser'] = decodedToken;
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   next();
// }

// // Decodes the Firebase JSON Web Token
// app.use(decodeJWT);

// module.exports = app;
