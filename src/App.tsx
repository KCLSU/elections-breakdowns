import './App.less';
import { useEffect, useState } from 'react';
import useCountData from './hooks/useCountData';
import { Modal } from 'antd';
import 'antd/dist/antd.less';
import Header from './Header';
import Tables from './Tables';
import Bars from './Bars';
import styled from 'styled-components';
import { Skeleton } from 'antd';
import Definitions from './Definitions';
import { CustomeEventEmitter } from './types';
import { Small } from './StageVotes';

const Canvas = styled.div`
  padding: 1rem;
  overflow:scroll;
  @media (max-width: 600px) {
    padding: 0;
  }
  .ant-page-header.has-footer {
    padding: 0;
  };

`

const ModalContainer = styled.div`
  overflow: visible;

  .m .ant-modal-root .ant-modal-wrap   {
    overflow: scroll!important;
  }

`

function App() {
  const { data, setPostId, postId, setElectionId, loading, error, clearData } = useCountData();
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState<'table' | 'bars' | 'definitions'>('bars');


  useEffect(() => {

    //LISTEN FOR A CUSTOM EVENT
    // THIS EVENT CAN OCCUR OUTSIDE THE APPLICATION 
    window.addEventListener('emitClick', (e: any & { detail: any }) => {
      const info = JSON.parse(e.detail) as CustomeEventEmitter;
      setVisible(true);
      setElectionId(+(info.election))
      setPostId(+(info.post));
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const closeModal = () => {
    setVisible(false);
    setView('bars');
    clearData();
  }

  // LOADIMNG STATE
  let modalContent = (
    <>
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
    </>
  )

  let nusDelegatesNote = null

  if (data && !loading) {

    // A CUSTOM NOTE ADDED FOR NUS DELEGATE POSITION
    if (postId && postId === 3776) {
      nusDelegatesNote = (
        <>
          <Small>** PLEASE NOTE: The 4 women candidates were elected automatically due to the NUS Conference requirement that 50% of delegates (rounded down) must be women or non-binary. KCLSU’s delegate entitlement is 11 this year, which means 5 delegates must be women. The KCLSU President is ex-officio and a woman so takes one of the women spaces which leaves 4 women spaces. Of all the NUS Delegate Candidates we have 4 women, therefore they are automatically elected to fill those spaces.</Small>
          <br></br>
        </>
      )
    }

    modalContent = (
      <Canvas>
        <Header setView={setView}
          places={data.Places}
          quota={data.Quota}
          candidatesTotal={data.Candidates.length}
          totalVote={data.TotalValidVote}
          post={data.Post.Title}
        />
        {nusDelegatesNote}
        {view === 'table' && <Tables candidates={data.Candidates} stages={data.Stages} />}
        {view === 'bars' && <Bars candidates={data.Candidates} stages={data.Stages} />}
        {view === 'definitions' && <Definitions />}
      </Canvas>
    )
  }

  if (error) modalContent = <p>Unfortunately there was an error fetching this data. Please try again later.</p>

  return (
    <ModalContainer>
      <Modal okText="Back to Results" title="Elections Post Breakdown" width="90%" visible={visible} onOk={closeModal} onCancel={closeModal}>
        {modalContent}
      </Modal>
    </ModalContainer>
  );
}

export default App;
