import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';
import { Asset } from 'expo-asset';



console.log("++++++++++++++++++Dtabase refresh+++++++++++++++++++")

// // // // // export async function openDatabase(databaseModule: any): Promise<SQLite.SQLiteDatabase> {
// // // // //     console.log("openDatabase initiated!");
// // // // //     console.log("awaiting getInfoAsync...");
// // // // //     if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
// // // // //         console.log("file system exists");
// // // // //         await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
// // // // //         console.log("makeDirectoryAsync completes");
// // // // //     }
// // // // //     console.log("about to set asset...");
// // // // //     const asset = await Asset.fromModule(databaseModule).downloadAsync();
// // // // //     console.log("Downloaded asset URI:", asset.localUri);
// // // // //     // await FileSystem.copyAsync({
// // // // //     //     from: asset.localUri,
// // // // //     //     to: FileSystem.documentDirectory + 'SQLite/testDB.db', // Adjusted destination path
// // // // //     // });
// // // // //     console.log("awaiting copyAsync...");
// // // // //     await FileSystem.copyAsync({
// // // // //         from: asset.localUri,
// // // // //         to: FileSystem.documentDirectory + 'SQLite/testDB.db', // Adjusted destination path
// // // // //     });
// // // // //     return SQLite.openDatabase('testDB.db');
// // // // // }

// // // // export async function openDatabase(databaseModule: any): Promise<SQLite.SQLiteDatabase> {
// // // //     console.log("openDatabase initiated!");

// // // //     // Check if the SQLite directory exists, create if not
// // // //     const dirInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite');
// // // //     if (!dirInfo.exists) {
// // // //         console.log("Directory does not exist, creating...");
// // // //         await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite', { intermediates: true });
// // // //         console.log("Directory created");
// // // //     }

// // // //     // Download the asset and copy it to the app's document directory
// // // //     console.log("about to set asset...");
// // // //     const asset = await Asset.fromModule(databaseModule).downloadAsync();
// // // //     console.log("Downloaded asset URI:", asset.localUri);

// // // //     console.log("Copying asset...");
// // // //     const destinationPath = FileSystem.documentDirectory + 'SQLite/testDB.db';
// // // //     await FileSystem.copyAsync({
// // // //         from: asset.localUri,
// // // //         to: destinationPath,
// // // //     });
// // // //     console.log("Asset copied");

// // // //     // Open the database
// // // //     console.log("Opening database...");
// // // //     const db = SQLite.openDatabase(destinationPath);
// // // //     console.log("Database opened");

// // // //     // Optionally, here you can add a test query to ensure everything is working
// // // //     try {
// // // //         const result = await db.executeSql('SELECT 1');
// // // //         console.log("Query executed, result:", result);
// // // //     } catch (error) {
// // // //         console.error("Error executing SQL:", error);
// // // //     }

// // // //     return db;
// // // // }

// // // export async function openDatabase(databaseModule: any): Promise<SQLite.SQLiteDatabase> {
// // //     console.log("openDatabase initiated!");

// // //     const asset = await Asset.fromModule(databaseModule).downloadAsync();
// // //     await FileSystem.copyAsync({
// // //         from: asset.localUri,
// // //         to: FileSystem.documentDirectory + 'SQLite/testDB.db',
// // //     });

// // //     const db = SQLite.openDatabase('SQLite/testDB.db');

// // //     return new Promise((resolve, reject) => {
// // //         db.transaction(tx => {
// // //             tx.executeSql(
// // //                 'SELECT 1;',
// // //                 [],
// // //                 (_, result) => {
// // //                     console.log("Database is ready with result:", result);
// // //                     resolve(db);
// // //                 },
// // //                 (_, error) => {
// // //                     console.error("Failed to query the database:", error);
// // //                     reject(error);
// // //                 }
// // //             );
// // //         });
// // //     });
// // // }

// // export async function openDatabase(databaseModule: any): Promise<SQLite.SQLiteDatabase> {
// //     console.log("openDatabase initiated!");

// //     try {
// //         console.log("Checking directory existence...");
// //         const dirInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite');
// //         if (!dirInfo.exists) {
// //             console.log("Directory does not exist, creating...");
// //             await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite', { intermediates: true });
// //             console.log("Directory created");
// //         }

// //         console.log("Downloading asset...");
// //         const asset = await Asset.fromModule(databaseModule).downloadAsync();
// //         console.log("Downloaded asset URI:", asset.localUri);

// //         console.log("Copying asset...");
// //         await FileSystem.copyAsync({
// //             from: asset.localUri,
// //             to: FileSystem.documentDirectory + 'SQLite/testDB.db',
// //         });
// //         console.log("Asset copied");

// //         console.log("Opening database...");
// //         const db = SQLite.openDatabase('SQLite/testDB.db');
// //         console.log("Database handle created");

// //         return new Promise((resolve, reject) => {
// //             db.transaction(tx => {
// //                 console.log("Executing test query...");
// //                 tx.executeSql(
// //                     'SELECT 1;',
// //                     [],
// //                     (_, result) => {
// //                         console.log("Test query successful, result:", result);
// //                         resolve(db);
// //                     },
// //                     (_, error) => {
// //                         console.error("Test query failed:", error);
// //                         reject(error);
// //                     }
// //                 );
// //             }, (error) => {
// //                 console.error("Transaction error:", error);
// //                 reject(error);
// //             }, () => {
// //                 console.log("Transaction successful");
// //             });
// //         });
// //     } catch (error) {
// //         console.error("An error occurred in openDatabase:", error);
// //         throw error; // Rethrow the error after logging it
// //     }
// // }

// export async function openDatabase(databaseModule: any): Promise<SQLite.SQLiteDatabase> {
//     console.log("openDatabase initiated!");

//     // Ensuring the SQLite directory exists
//     const dirInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite');
//     if (!dirInfo.exists) {
//         console.log("Directory does not exist, creating...");
//         await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite', { intermediates: true });
//         console.log("Directory created");
//     }

//     // Downloading and copying the database asset
//     console.log("Downloading asset...");
//     const asset = await Asset.fromModule(databaseModule).downloadAsync();
//     console.log("Downloaded asset URI:", asset.localUri);
//     const destinationPath = FileSystem.documentDirectory + 'SQLite/testDB.db';
//     await FileSystem.copyAsync({
//         from: asset.localUri,
//         to: destinationPath,
//     });
//     console.log("Asset copied");

//     // Opening the database
//     console.log("Opening database...");
//     const db = SQLite.openDatabase(destinationPath);
//     console.log("Database handle created");

//     // Performing a transaction to execute SQL
//     return new Promise((resolve, reject) => {
//         db.transaction(tx => {
//             tx.executeSql(
//                 'SELECT 1;', // This could be any initial SQL statement, e.g., CREATE TABLE
//                 [],
//                 (_, result) => {
//                     console.log("Initial query executed, result:", result);
//                     resolve(db);
//                 },
//                 (_, error) => {
//                     console.error("Failed to execute initial query:", error);
//                     reject(error);
//                 }
//             );
//         }, (error) => {
//             console.error("Transaction error:", error);
//             reject(error);
//         }, () => {
//             console.log("Transaction successful");
//         });
//     });
// }

export async function checkDatabaseFile() {
    const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'testDB.db');
    console.log(fileInfo); // This will show if the file exists and other file info
}



// export async function openDatabase(databaseModule: any): Promise<SQLite.SQLiteDatabase> {
//     console.log("openDatabase initiated!");

//     // Ensuring the SQLite directory exists
//     const dirInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite');
//     if (!dirInfo.exists) {
//         console.log("Directory does not exist, creating...");
//         await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite', { intermediates: true });
//         console.log("Directory created");
//     }

//     // Downloading and copying the database asset
//     console.log("Downloading asset...");
//     const asset = await Asset.fromModule(databaseModule).downloadAsync();
//     console.log("Downloaded asset URI:", asset.localUri);
//     const destinationPath = FileSystem.documentDirectory + 'SQLite/testDB.db';
//     console.log("destinationPath is ", destinationPath)
//     await FileSystem.copyAsync({
//         from: asset.localUri,
//         to: destinationPath,
//     });
//     console.log("Asset copied");

//     // Opening the database
//     console.log("Opening database...");
//     const db = SQLite.openDatabase(destinationPath);
//     console.log("Database handle created");

//     // Performing a transaction to execute SQL
//     return new Promise((resolve, reject) => {
//         db.transaction(tx => {
//             tx.executeSql(
//                 'SELECT 1;', // This could be any initial SQL statement, e.g., CREATE TABLE
//                 [],
//                 (_, result) => {
//                     console.log("Initial query executed, result:", result);
//                     resolve(db);
//                 },
//                 (_, error) => {
//                     console.error("Failed to execute initial query:", error);
//                     return false; // Continue the transaction even after an error
//                 }
//             );
//         }, (error) => {
//             console.error("Transaction error:", error);
//             reject(error);
//         }, () => {
//             console.log("Transaction successful");
//         });
//     });
// }






export async function copyDatabase(databaseModule: any): Promise<void> {
    console.log("copyDatabase initiated!");

    // Define the destination path for the database at the start
    const sqliteDirectory = FileSystem.documentDirectory + 'SQLite';
    const destinationPath = `${sqliteDirectory}/contentDB.db`; // Use template string for clarity

    // Check if the SQLite directory exists within the document directory
    const dirInfo = await FileSystem.getInfoAsync(sqliteDirectory);
    if (!dirInfo.exists) {
        console.log("SQLite directory does not exist, creating...");
        await FileSystem.makeDirectoryAsync(sqliteDirectory, { intermediates: true });
        console.log("SQLite directory created");
    }

    // Check if the database already exists, delete if it does
    await deleteDB(destinationPath);

    // Download and write the database
    await writeDB(databaseModule, destinationPath);

    // Additional log for confirmation
    const finalInfo = await FileSystem.getInfoAsync(destinationPath);
    console.log("Final database file info:", finalInfo);
}

async function deleteDB(destinationPath) {
    const fileInfo = await FileSystem.getInfoAsync(destinationPath);
    if (fileInfo.exists) {
        console.log("Database already exists at", destinationPath, ", deleting...");
        await FileSystem.deleteAsync(destinationPath);
        console.log("Existing database deleted.");
    }
}

async function writeDB(databaseModule, destinationPath) {
    const asset = Asset.fromModule(databaseModule);
    console.log("Downloading and copying the database asset...");
    await asset.downloadAsync(); // Ensure the asset is downloaded locally
    console.log("Finished downloading asset, copying to app's document directory...");

    await FileSystem.copyAsync({
        from: asset.localUri,
        to: destinationPath,
    });

    console.log("Database asset copied successfully to:", destinationPath);
}