import {
  Add,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FiberManualRecordOutlined,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import { auth, db } from "../firebase";
import SiderBarOptions from "./SiderBarOptions";

function Siderbar() {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);
  return (
    <SuderBarContainer>
      <Sidebarheader>
        <SiderBarInfo>
          <h2>New Users </h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </SiderBarInfo>
        <Create />
      </Sidebarheader>
      <SiderBarOptions Icon={InsertComment} title="Threads" />
      <SiderBarOptions Icon={Inbox} title="Mentions & reactions" />
      <SiderBarOptions Icon={Drafts} title="Saved items" />
      <SiderBarOptions Icon={BookmarkBorder} title="Channel browser" />
      <SiderBarOptions Icon={PeopleAlt} title="Apps" />
      <SiderBarOptions Icon={FileCopy} title="File browser" />
      <SiderBarOptions Icon={ExpandLess} title="Show less" />
      <hr />
      <SiderBarOptions Icon={ExpandMore} title="Channels" />
      <hr />
      <SiderBarOptions Icon={Add} addChannelOption title="Add Channels" />
      {channels?.docs.map((doc) => (
        <SiderBarOptions
          key={doc.id}
          id={doc.id}
          IaddChannelOption
          title={doc.data().name}
        />
      ))}
    </SuderBarContainer>
  );
}

export default Siderbar;
const SuderBarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  .hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const Sidebarheader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SiderBarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 13px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
