// // import url from 'url';
// // import { google } from 'googleapis';
// // import express from 'express';

// // const PORT = 3000;
// // const app = express();


// // const oAuth2Client = new google.auth.OAuth2(
// //     "135609486179-d28icklna8vflggja2g94nsvtdc8dd6k.apps.googleusercontent.com",
// //     "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",
// //     "http://localhost:3000/get-token"
// // );

// // app.get('/', (req, res) => {
// //     const url = oAuth2Client.generateAuthUrl({
// //         access_type: 'offline',
// //         scope: "https://www.googleapis.com/auth/fitness.activity.read",
// //     });
// //     console.log({ url });
// //     res.send({ url })
// //         ;
// // });

// // app.get('/get-token', async (req, res, next) => {
// //     try {
// //         console.log('Query parameters:', url.parse(req.url, true).query); // Log the query parameters
// //         const { code } = url.parse(req.url, true).query; // Extracting 'code' directly from req.query
// //         const { tokens } = await oAuth2Client.getToken(code); // Await getToken since it's asynchronous
// //         if (tokens.refresh_token) {
// //             oAuth2Client.setCredentials({ refresh_token: tokens.refresh_token });
// //             await oAuth2Client.refreshAccessToken();
// //         }
// //         res.json({ token: tokens.access_token });
// //     } catch (error) {
// //         next(error);
// //     }
// // });

// // app.use((req, res, next) => {
// //     const token = req.headers?.authorization?.split(' ')[1];
// //     if (!token) {
// //         return next(new Error('Please provide a token to access this resource'));
// //     }
// //     req.token = token;
// //     next();
// // });

// // // using fit store
// // app.get('/steps', async (req, res, next) => {
// //     try {
// //         oAuth2Client.setCredentials({ access_token: req.token });
// //         const fitnessStore = google.fitness({ version: 'v1', auth: oAuth2Client });
// //         const dataTypeName = 'com.google.step_count.delta';
// //         const dataSourceId = 'derived:com.google.step_count.delta:com.google.android.gms:estimated_steps';
// //         const data = {
// //             aggregateBy: [{ dataTypeName, dataSourceId }],
// //             bucketByTime: { durationMillis: 24 * 60 * 60 * 1000 },
// //             startTimeMillis: Date.now() - 3 * 24 * 60 * 60 * 1000,
// //             endTimeMillis: Date.now(),
// //         };

// //         const result = await fitnessStore.users.dataset.aggregate({
// //             userId: 'me',
// //             requestBody: data,
// //             fields: 'bucket(dataset(point(value(intVal))))',
// //         });
// //         res.json(result);
// //     } catch (error) {
// //         next(error);
// //     }
// // });

// // // using fetch
// // app.get('/steps2', async (req, res, next) => {
// //     try {
// //         const dataTypeName = 'com.google.step_count.delta';
// //         const dataSourceId = 'derived:com.google.step_count.delta:com.google.android.gms:estimated_steps';
// //         const now = Date.now();
// //         const data = {
// //             aggregateBy: [{ dataTypeName, dataSourceId }],
// //             bucketByTime: { durationMillis: 24 * 60 * 60 * 1000 },
// //             startTimeMillis: now - 3 * 24 * 60 * 60 * 1000,
// //             endTimeMillis: now,
// //         };
// //         const endpoint =
// //             'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate?fields=bucket(dataset(point(value(intVal))))';
// //         const response = await fetch(endpoint, {
// //             method: 'POST',
// //             headers: {
// //                 Authorization: `Bearer ${req.token}`,
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify(data),
// //         });
// //         const result = await response.json();
// //         res.json(result);
// //     } catch (error) {
// //         next(error);
// //     }
// // });

// // // error handler middleware
// // app.use((err, req, res, next) => {
// //     res.status(500).json({ error: err.message });
// // });

// // app.listen(PORT, () => {
// //     console.log(`App listening at ${PORT}`);
// // });


// import express from 'express';
// import { google } from 'googleapis';

// const app = express();
// const PORT = 3000;

// // Initialize OAuth2 client
// const oAuth2Client = new google.auth.OAuth2({
//     clientId: '135609486179-d28icklna8vflggja2g94nsvtdc8dd6k.apps.googleusercontent.com',
//     clientSecret: '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',
//     redirectUri: 'http://localhost:3000/get-token'
// });

// // Redirect to Google OAuth consent screen
// app.get('/', (req, res) => {
//     const authUrl = oAuth2Client.generateAuthUrl({
//         access_type: 'offline',
//         scope: 'https://www.googleapis.com/auth/fitness.activity.read'
//     });
//     res.json({ url: authUrl });
// });

// // Exchange authorization code for access token
// app.get('/get-token', async (req, res, next) => {
//     try {
//         const { code } = req.query; // Extract the authorization code from query parameters
//         if (!code) {
//             throw new Error('Authorization code not found');
//         }
//         const { tokens } = await oAuth2Client.getToken(code);
//         res.json({ token: tokens.access_token });
//     } catch (error) {
//         next(error);
//     }
// });

// // Retrieve user's step count data from Google Fit
// app.get('/steps', async (req, res, next) => {
//     try {
//         oAuth2Client.setCredentials({ access_token: req.query.token });
//         const fitness = google.fitness({ version: 'v1', auth: oAuth2Client });
//         const result = await fitness.users.dataset.aggregate({
//             userId: 'me',
//             requestBody: {
//                 aggregateBy: [{ dataTypeName: 'com.google.step_count.delta' }],
//                 bucketByTime: { durationMillis: 24 * 60 * 60 * 1000 },
//                 startTimeMillis: Date.now() - 3 * 24 * 60 * 60 * 1000,
//                 endTimeMillis: Date.now(),
//             }
//         });
//         res.json(result.data);
//     } catch (error) {
//         next(error);
//     }
// });

// // Error handler middleware
// app.use((err, req, res, next) => {
//     res.status(500).json({ error: err.message });
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
