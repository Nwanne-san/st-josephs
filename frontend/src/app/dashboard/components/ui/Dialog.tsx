import React from "react";
import Button from "@/components/ui/Button";

interface DialogProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  disabled?: boolean; // Option to disable buttons
  loading?: boolean; // Option to show loading state
}

const Dialog: React.FC<DialogProps> = ({
  title,
  message,
  onConfirm,
  onCancel,
  disabled = false, // Default to false if not provided
  loading = false, // Default to false if not provided
}) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 cursor-default">
    <div className="bg-white p-4 rounded w-80">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="mt-2">{message}</p>
      <div className="flex justify-end gap-2 mt-4">
        <Button
          className="bg-gray-300 px-4 py-2 !rounded !hover:bg-gray-100 duration-200"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          className="bg-red-500 text-white px-4 py-2 !rounded border hover:border-red-500 hover:bg-transparent hover:text-red-500 !duration-200"
          onClick={onConfirm}
          disabled={disabled || loading} // Disable if either disabled or loading
          loading={loading}
          child={"Deleting "} // This can be a custom text like "Deleting..." when loading
        >
          Delete
        </Button>
      </div>
    </div>
  </div>
);
export default Dialog;
