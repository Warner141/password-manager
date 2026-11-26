import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { PasswordEntryFields } from "./password-entry-fields";

export default function InputDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button size="lg" variant="outline">
          Add <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Password</DialogTitle>
          <DialogDescription>
            <PasswordEntryFields />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
