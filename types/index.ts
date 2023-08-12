export interface Car {
  slug?: string;
  carName: string;
  image: File; // Assuming image is a File object
  imagePath: string; // New property to store the image path
  review: string;
  creator: string;
  creator_email: string;
}

export interface CarProps {
  car: string;
}
