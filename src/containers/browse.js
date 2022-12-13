import React, { useEffect, useState, useContext } from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Loading } from "../components";

export function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [profile.displayName]);

  return (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <SelectProfileContainer user={user} setProfile={setProfile} />
    </>
  );
}
