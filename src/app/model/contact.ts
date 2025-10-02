import { Address } from "./address";
import { ContactType } from "./contact-type";

export interface Contact {
  id?: number; // Opcjonalny, ponieważ może nie być ustawiony dla nowego kontaktu
  address?: Address; // Typ jest referencją do Address
  contactType: ContactType;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  displayName?: string;
  taxId?: string;
  bankAccountNumber?: string;
  tags?: string[];

  phone_primary?: string;
  phone_secondary?: string;
  email_primary?: string;
  email_secondary?: string;  
  job_title?: string;
  website?: string;
  notes?: string;
  category?: 'personal' | 'work' | 'family' | 'business' | 'other';
  birthday?: string;
}
