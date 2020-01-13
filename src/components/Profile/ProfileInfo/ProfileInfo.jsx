import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
// import ProfileStatusWithHook from './ProfileStatusWithHook';

const ProfileInfo = React.memo(({profile, status, updateStatus}) => {
  if(!profile) {
    return <Preloader />
  }

  return(
    <div>
      <div>
        <img src="https://png.pngtree.com/back_origin_pic/00/09/01/cbe0026ede51bf3b24b61f4d99394066.jpg" alt="fon"  />
      </div>
      <div className={style.descrBlock}>
        <img src={profile.photos.large} />
        <ProfileStatus status={status} updateStatus={updateStatus} />
        {/* <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} /> */}
      </div>
    </div>
  )
})

export default ProfileInfo;