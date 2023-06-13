import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, collectionData, collection, doc, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersCollection: any;

  constructor(private afAuth: AngularFireAuth, private firestore: Firestore) {
    this.usersCollection = collection(firestore, 'users');
  }

  async login(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  }

  async register(user: any): Promise<string | null> {
    try {
      const docRef = await addDoc(this.usersCollection, user);
      console.log('Document written with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('Error adding document:', error);
      return null;
    }
  }

  async resetPassword(email: string): Promise<void> {
    try {
      await this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      throw error;
    }
  }
}
