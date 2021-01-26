import React, { useRef, useEffect  } from 'react';
import { Toast } from 'primereact/toast';

const MyToasts = (props: any) => {

const toast = useRef<any>(null);

useEffect(() => {
    if (props && props.success === 'true') {
        const showSuccess = () => {
            toast.current.show({severity: 'success', summary: 'Success!', detail: 'The countdown is over!', life: 3000});
        }
        showSuccess();
    }
    if (props && props.error === 'true') {
        const showError = () => {
           toast.current.show({severity: 'error', summary: 'Time Expired', detail: 'End date / time must be greater than current time', life: 3000});
        }
        showError();
    }
});

return (
    <div>
        <Toast ref={toast} />
    </div>
    )
}
export default MyToasts;