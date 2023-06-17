export interface ModalProps {
  item: {
    name: string;
    description: string;
    github: string;
    live: string;
  };
  onOpenModal: (item: ModalProps["item"]) => void;
}
