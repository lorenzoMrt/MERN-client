import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Form from './Form'
import { addCustomer } from '../api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ICustomer } from '../Models/Customer';

interface ModalProps {
  open: boolean;
  closeModal: () => void;
}

export default function Modal(props:ModalProps) {
  const queryClient = useQueryClient()
  const cancelButtonRef = useRef(null)
  const nameRef = useRef<HTMLInputElement>(null);
  const bagCountRef = useRef<HTMLInputElement>(null);
  const customerMutation = useMutation({
    mutationFn: (newCustomer:ICustomer) => addCustomer(newCustomer),
    onSuccess: () => {
      queryClient.invalidateQueries(['customers'])
    }
  })
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => props.closeModal()}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <Form bagCountRef={bagCountRef} nameRef={nameRef}/>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                    onClick={() => {
                      customerMutation.mutate({name: nameRef.current?.value!, bags: parseInt(bagCountRef.current?.value!)})
                      props.closeModal()
                    }}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => props.closeModal()}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
