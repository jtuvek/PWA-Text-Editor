import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

const dbPromise = initdb(); // Make sure to store the promise for later use

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const db = await dbPromise;
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const id = await store.put({ content }); // Assuming the structure of your object is { content: 'yourContent' }
  await tx.complete;
  console.log(`Content added to the database with id: ${id}`);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await dbPromise;
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const content = await store.getAll();
  await tx.complete;
  console.log('All content retrieved from the database:', content);
  return content;
};

// Initialize the database
initdb();

