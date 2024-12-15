declare namespace RequestModel {
  interface RequestModelWithId {
    id: number;
  }

  interface CreateContact {
    name: string;
    email: string;
    phone_number: string;
    tag: string;
    status: string;
  }

  export interface UpdateContact {
    name: string;
    email: string;
    phone_number: string;
    tag: string;
    status: string;
  }
}
