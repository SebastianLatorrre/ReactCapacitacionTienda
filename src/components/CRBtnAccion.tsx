import { IconButton } from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

interface Props {
    isCheck: boolean
    handleCheck?: () => void
    handleShow?: () => void
    isShow?: boolean
}

const CRBtnAccion = ({ isCheck, handleCheck, handleShow, isShow = false }: Props) => {
    return (
        <>
            {isShow ? (
                <IconButton onClick={handleShow}>
                    <RemoveRedEyeIcon color='primary' />
                </IconButton>
            ) : (
                <IconButton onClick={handleCheck}>
                    {isCheck ? <LibraryAddIcon color='primary' /> : <LibraryAddCheckIcon color='success' />}
                </IconButton>
            )}
        </>
    )
}

export default CRBtnAccion;
