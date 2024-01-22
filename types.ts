export interface Store {
  id: string;
  name: string;
  phone: string;
  address: string;
  email: string;
}
export interface Project {
  id: string;
  name: string;
  description: string;
  location: string;
  numberOfParticipants: string;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}
