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
  const { data, setPostId, loading, error, clearData } = useCountData();
  const [visible, setVisible] = useState(true);
  const [view, setView] = useState<'table' | 'bars' | 'definitions'>('bars');


  useEffect(() => {
    window.addEventListener('emitClick', (e: any) => {
      setVisible(true);
      setPostId(+(e.detail))
    })
  }, [])

  const closeModal = () => {
    setVisible(false);
    clearData();
  }

  let modalContent = (
    <>
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
    </>
  )

  if (data && !loading) {
    modalContent = (
      <Canvas>
        <Header setView={setView}
          places={data.Places}
          quota={data.Quota}
          candidatesTotal={data.Candidates.length}
          totalVote={data.TotalValidVote}
          post={data.Post.Title}
        />
        {view === 'table' && <Tables candidates={data.Candidates} stages={data.Stages} />}
        {view === 'bars' && <Bars candidates={data.Candidates} stages={data.Stages} />}
        {view === 'definitions' && <Definitions />}
      </Canvas>
    )
  }

  if (error) return <p>Unfortunately there was an error fetching this data. Please try again later.</p>

  return (
    <ModalContainer>
      <Modal okText="Back to Results" title="Elections Post Breakdown" width="90%" visible={visible} onOk={closeModal} onCancel={closeModal}>
        {modalContent}
      </Modal>
    </ModalContainer>
  );
}

export default App;
