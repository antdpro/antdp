import React, { useState, useMemo, useEffect } from 'react';
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';

interface Documents extends Document {
  mozFullScreen?:()=>boolean 
  webkitIsFullScreen?:()=>boolean  
  webkitFullScreen?:()=>boolean  
  msFullScreen?:()=>boolean  
  webkitCancelFullScreen?:()=>void;
  mozCancelFullScreen?:()=>void;
  webkitRequestFullScreen?:()=>void;
  msExitFullscreen?:()=>void;
  mozFullScreenEnabled?:boolean
  webkitFullscreenEnabled?:boolean
  msFullscreenEnabled?:boolean
}

interface HTMLDOM extends HTMLElement {
  webkitRequestFullScreen?:()=>void
  mozRequestFullScreen?:()=>void
  msRequestFullscreen?:()=>void
}

const document: Documents = window.document; 

/**
 * 当前是否全屏
 */
function isFullScreen() {
  return !!(
    document.fullscreen ||
    document.mozFullScreen ||
    document.webkitIsFullScreen ||
    document.webkitFullScreen ||
    document.msFullScreen
  );
}

/**
 * 判断当前文档是否能切换到全屏
 */
function isFullscreenEnabled() {
  return (
    document.fullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.webkitFullscreenEnabled ||
    document.msFullscreenEnabled
  );
}

export default (props = {}) => {
  if (!isFullscreenEnabled()) return null;
  const [fullscreen, setFullscreen] = useState(false);
  if (fullscreen) {
    let element:HTMLDOM = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  } else if (isFullScreen()) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
  const handle = () => {
    if (!isFullScreen() && fullscreen) {
      setFullscreen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('resize', handle, false);
    };
  });

  return useMemo(
    () => (
      <span
        onClick={() => setFullscreen(!fullscreen)}
        style={{ fontSize: 18, marginRight: 10, cursor: 'pointer' }}
      >
        {fullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
      </span>
    ),
    [fullscreen],
  );
};
