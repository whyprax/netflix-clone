import React, { useState } from "react";
import { useContext } from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";

export function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  const [profile, setProfile] = useState({});

  return (
    <>
      <SelectProfileContainer user={user} setProfile={setProfile} />
    </>
  );
}
