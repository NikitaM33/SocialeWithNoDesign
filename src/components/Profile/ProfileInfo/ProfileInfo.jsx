import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/person-icon.png';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';

const ProfileInfo = React.memo(({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
  if(!profile) {
    return <Preloader />
  }

  const [ editMode, setEditMode ] = useState(false);

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    })
  }
  
  return(
    <div>
      <div>
        <img src="https://png.pngtree.com/back_origin_pic/00/09/01/cbe0026ede51bf3b24b61f4d99394066.jpg" alt="fon"  />
      </div>
      <div className={style.descrBlock}>
        <img src={profile.photos.large || userPhoto} className={style.mainPhoto} />
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        
        {editMode ? <ProfileDataForm initialValues={profile} profile={profile} status={status} updateStatus={updateStatus} onSubmit={onSubmit} />
        : <ProfileData profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}} /> }

        {/* <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} /> */}
      </div>
    </div>
  )
})

const ProfileData = ({profile, status, updateStatus, isOwner, goToEditMode}) => {
  return (
    <div>
      {isOwner && <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>}
      <div>
        <b>Full name:</b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job:</b>{profile.lookingForAJob ? ' Yes' : ' No'}
      </div>
      {profile.lookingForAJob &&
        <div>
          <b>My professional skills: </b>{profile.lookingForAJobDescription}
        </div>
      }
      <div>
        <b>About me: </b>{profile.aboutMe}
      </div>
      <div>
        <b>Contacts: </b>{Object.keys(profile.contacts).map(k => {
          return <Contact key={k} contactTitle={k} contactValue={profile.contacts[k]} />
        })}
      </div>
      <div>
        <b>Status: </b><ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    </div>
  )
};

const Contact = ({contactTitle, contactValue}) => {
  return <div className={style.contacts}><b>{contactTitle}: </b>{contactValue}</div>
}

export default ProfileInfo;