import { X } from "lucide-react";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  isModalOpen: boolean;
  modalHeader: string; // Add header prop
}

const Modal: React.FC<ModalProps> = ({
  children,
  onClose,
  isModalOpen,
  modalHeader,
}) => (
  <>
    {isModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{modalHeader}</h2>
            <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-200 duration-200 rounded-full" onClick={onClose}>
              <X />
            </button>
          </div>
          {/* Modal Content */}
          {children}
        </div>
      </div>
    )}
  </>
);

export default Modal;
