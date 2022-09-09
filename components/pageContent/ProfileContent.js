import React, { useState, useEffect } from 'react';
import { images } from '@utils/constants';
import Input from '@components/commons/Input';
import { authHelper, apiHelper } from '@utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { postImageProfile, setModal } from '@redux/actions';

export default function ProfileContent() {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state?.auth);
    const [userProfile, setUserProfile] = useState();
    const [fileState, setFileState] = useState({
        file: null,
        base64URL: undefined,
    });

    useEffect(() => {
        if (authState?.userID !== null) {
            const user = apiHelper.getUserInfo(authState.userID);
            user.then((res) => {
                setUserProfile(res.data.data);
            }).catch((err) => {
                console.log(err);
            });
        }
    }, [authState]);

    const handleSubmitImage = async () => {
        dispatch(
            await postImageProfile({ instructorID: authState.userID, imageURL: fileState.base64URL }, (data) => {
                console.log(data, 'hehe');
            }),
        );
    };

    const getBase64 = (file) => {
        return new Promise((resolve) => {
            let fileInfo;
            let baseURL = '';
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                baseURL = reader.result;
                console.log('reader', reader);
                resolve(baseURL);
            };
        });
    };

    const handleFileInputChange = (e) => {
        const fileTypeList = ['png', 'jpg', 'jpeg'];
        let isUpload = true;

        let { file } = fileState;
        file = e?.target?.files[0];
        const fileType = file?.name?.split('.').pop();
        const fileSize = file?.size;

        console.log('file: ' + file);
        if (fileTypeList.indexOf(fileType) === -1) {
            isUpload = false;
            dispatch(
                setModal({
                    isShow: true,
                    title: 'Upload Image Error',
                    content: <h4 className="text-center">File type must be png, jpg or jpeg</h4>,
                }),
            );
        }

        if (fileSize < 0 && fileSize > 1024 * 1024 * 2) {
            isUpload = false;
            dispatch(
                setModal({
                    isShow: true,
                    title: 'Upload Image Error',
                    content: <h4 className="text-center">File size must be between 0 to 2mb</h4>,
                }),
            );
        }

        getBase64(file)
            .then((result) => {
                file['base64'] = result;
                isUpload &&
                    setFileState({
                        base64URL: result,
                        file,
                    });
            })
            .catch((err) => {
                console.log(err);
            });

        isUpload &&
            setFileState({
                file: e.target.files[0],
            });
    };

    console.log('fileState', fileState);
    console.log('userProfile?.image', userProfile?.image);

    return (
        <div className="content-body">
            <div className="container">
                <div className="event-modal event-profile">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="row my-4">
                                <div className="col-xl-4 offset-xl-1 p-r-0">
                                    <div className="media personal-profile d-flex flex-column align-items-center">
                                        <img
                                            className="m-r-30 img-profile"
                                            src={
                                                fileState.base64URL ??
                                                ((userProfile?.image ?? images.AVT_MALE) ||
                                                    (userProfile?.image == '' ? images.AVT_MALE : userProfile?.image))
                                            }
                                            alt="placeholder image"
                                        />
                                        <div>
                                            <input className="my-4" type="file" name="file" onChange={handleFileInputChange} />
                                        </div>
                                        <button
                                            disabled={!fileState.base64URL ?? true}
                                            className="btn btn-secondary mt-2 profile_btn-upload-img"
                                            onClick={handleSubmitImage}>
                                            Upload Image
                                        </button>
                                    </div>
                                </div>
                                <div className="col-xl-7 p-r-0">
                                    <div className="media-body d-flex flex-column justify-content-center">
                                        <div className="form-group clearfix my-3 d-flex align-items-center">
                                            <label className="form-check-label">Name: </label>
                                            <Input
                                                name="name"
                                                type="text"
                                                className="form-control dis__input-profile"
                                                value={userProfile?.fullname}
                                                disabled={true}
                                            />
                                        </div>
                                        <div className="form-group clearfix my-3 d-flex align-items-center">
                                            <label className="form-check-label">Email: </label>
                                            <Input
                                                name="email"
                                                type="text"
                                                className="form-control dis__input-profile"
                                                value={userProfile?.email}
                                                disabled={true}
                                            />
                                        </div>
                                        <div className="form-group clearfix my-3 d-flex align-items-center">
                                            <label className="form-check-label">Phone: </label>
                                            <Input
                                                name="phone"
                                                type="text"
                                                className="form-control dis__input-profile"
                                                value={userProfile?.phone}
                                                disabled={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
