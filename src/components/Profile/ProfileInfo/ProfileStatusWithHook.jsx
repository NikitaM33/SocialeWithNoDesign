import React, { useState } from 'react';
// import style from './ProfileInfo.module.css';

const ProfileStatusWithHook = (props) => {
    let [ editMode, setEditMode ] = useState(false);
    return(
        <div>
            {!editMode &&
                <div>
                    <span>
                        {props.status || "No status"}
                    </span>
                </div>
            }

            {editMode &&
                <div>
                    <input autoFocus={true} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHook;