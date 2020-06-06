/**
 * Rules:
 * accesible only to uid holder
 */
interface User {
  // collection
  uid: string;
  logs: WorkoutLog[]; // subcollection
  workouts: string[]; // id of the saved workout
  // automanaged by function
  exercises: string[]; // subcollection
  // id of the exercise
  // automanaged by function
  settings: any;
}

/**
 * Rules:
 *
 */
interface Exercise {
  // collection
  name: string;
  description: string;
  intensity: number;
  difficulty: number;
  sided: boolean;
  weighted: boolean;
  owner: string; // uid of the owner user
  equipment: Equipment;
  target: Target;
}

interface WorkoutItem {
  // document model
  exercise: string; // id of an exercise
  duration: String;
  order: number;
  progress: number;
}

interface Workout {
  items: WorkoutItem[];
  name: string;
  createdAt: string;
}

interface WorkoutLog {
  // document model
  items: WorkoutItem[];
  sourceWorkout: string;
  performedAt: string;
}

interface Equipment {
  uid: string;
  name: string;
  icon: string;
}

interface Target {
  uid: string;
  name: string;
  primary: string;
  secondary: string;
}
