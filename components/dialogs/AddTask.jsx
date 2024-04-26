import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {AddTaskFrom} from '../forms/AddTaskForm'
import {cn} from '@/lib/utils/mergeCss'

function AddTask({children, className}) {
	return (
		<Dialog className="">
			<DialogTrigger className="bg-black text-white w-full py-2.5 rounded-lg mt-3 font-semibold">
				Add New
			</DialogTrigger>
			<DialogContent className="">
				<DialogHeader>
					<DialogTitle>Add New Task</DialogTitle>
					<AddTaskFrom />
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}


// State to control the visibility of the modal
const [isOpen, setIsOpen] = useState(false);

// Function to handle opening the modal
const handleOpen = () => setIsOpen(true);

// Function to handle closing the modal
const handleClose = () => setIsOpen(false);

// component's return statement
<button onClick={handleOpen}>Add Task</button>
{isOpen && (
  <Modal>
    <AddTaskForm onClose={handleClose} />
  </Modal>
)}


export {AddTask}
