import React from 'react';
import {ContactForm} from "./ContactForm";
import { Wallet } from "./Wallet";
import { ContactList } from "./ContactList";
import { Header } from "./Header";

export const App = () => (
  <div>
    <Header />
    <div className="min-h-full">
      <div className="max-w-4xl mx-auto p-2">
        <Wallet />
        <ContactForm />
        <ContactList />
      </div>
    </div>
  </div>
);
