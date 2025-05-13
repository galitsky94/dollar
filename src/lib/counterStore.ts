// For demo purposes, use a global in-memory variable for simplicity
// This will reset on server restarts but persist between requests in the same instance
let globalCounter = 1;

// In a real application, you would use Redis, a database, or a proper filesystem
// solution for serverless environments like AWS S3 or Firebase

export function getCount(): number {
  return globalCounter;
}

export function incrementCount(): number {
  globalCounter += 1;
  return globalCounter;
}
