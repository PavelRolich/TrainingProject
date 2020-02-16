import {firestore} from 'firebase/app';
import Timestamp = firestore.Timestamp;

export interface Exercise {
  id: string;
  name: string;
  duration: number;
  calories: number;
  date?: Date;
  state?: 'completed' | 'cancelled' | null;
}

export interface ExerciseFromFirebase {
  id: string;
  name: string;
  duration: number;
  calories: number;
  date: Timestamp;
  state: 'completed' | 'cancelled' | null;
}
