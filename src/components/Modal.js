const Modal = (props) => {
    const {value, onChange} = props
    return (
        <div>
            <input value={value} onChange={onChange}/>
        </div>
    )
}

export default Modal