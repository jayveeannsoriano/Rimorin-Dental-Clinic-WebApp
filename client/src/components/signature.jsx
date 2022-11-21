
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/dragNdrop.css';

import { ImageConfig } from '../config/ImageConfig.js'; 

const Signature = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    return (
        <>
            <div
                ref={wrapperRef}
                className="signature-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="signature-file-input__label">
                <i class="fa-regular fa-image"></i>
                    <p><span>Upload a file </span>or drag & signature</p>
                    <p>PNG, JPG, JPEG up to 5MB</p>
                </div>
                <input type="file" name="imageFile" multiple onChange={onFileDrop} required/>
            </div>
            {
                fileList.length > 0 ? (
                    <div className="signature-file-preview">
                        <p className="signature-file-preview__title">
                            Ready to upload
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="signature-file-preview__item">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    <div className="signature-file-preview__item__info">
                                        <p>{item.name}</p>
                                        <p>{item.size}B</p>
                                    </div>
                                    <span className="signature-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </>
    );
}
Signature.propTypes = {
    onFileChange: PropTypes.func
}


export default Signature;