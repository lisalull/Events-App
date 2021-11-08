interface Image {
  url: string;
}

export default interface Event {
  name: string;
  id: string;
  url: string;
  images: Image[];
}
