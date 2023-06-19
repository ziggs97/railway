import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, collectionData, collection, doc, addDoc, getDoc } from '@angular/fire/firestore';


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
      const userDoc = doc(this.usersCollection, email); // Assuming the email is used as the document ID
      const userSnapshot = await getDoc(userDoc);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        // Access the user data and perform actions as needed
      }
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
      console.error('Error sending password reset email:', error);
      throw error;
    }
  }

  async checkUserExists(email: string): Promise<boolean> {
    try {
      const userDocRef = doc(this.firestore, 'users', email);
      const userSnapshot = await getDoc(userDocRef);
      return userSnapshot.exists();
    } catch (error) {
      console.error('Error checking user existence:', error);
      throw error;
    }
  }

  getCurrentUserEmail(): Promise<string | null> {
    return new Promise((resolve, reject) => {
      this.afAuth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user.email);
        } else {
          resolve(null);
        }
      }, reject);
    });
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  }

}
