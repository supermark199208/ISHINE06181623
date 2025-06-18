import React, { useState, useEffect } from 'react';
import { ArrowUpToLine } from 'lucide-react';

const BackToTopWidget = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动位置，决定是否显示按钮
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 1100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* 浮动框3 - 圆形回到顶部按钮 */}
      <div 
        className="fixed right-6 z-40 cursor-pointer transition-all duration-300 transform hover:scale-110"
        style={{ 
          bottom: 'calc(132px + 69px + 24px + 180px - 180px)', // 往下调整180像素
          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
        }}
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center relative"
          style={{
            width: '80px', // 直径调整为80px
            height: '80px', // 直径调整为80px
            backgroundColor: isHovered ? 'rgb(59, 130, 246)' : '#000000'
          }}
        >
          {/* 双箭头图标 - 开口向下 */}
          <div className="flex flex-col items-center">
            <ArrowUpToLine className="h-6 w-6 text-white mb-1" />
          </div>
        </div>

        {/* 提示框 - 悬停时显示 */}
        {isHovered && (
          <div 
            className="absolute right-full top-1/2 transform -translate-y-1/2 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap shadow-lg mr-3 z-50"
            style={{ backgroundColor: 'rgb(59, 130, 246)' }}
          >
            Go back to top!
            <div 
              className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-t-2 border-t-transparent border-b-2 border-b-transparent"
              style={{ borderLeftColor: 'rgb(59, 130, 246)' }}
            ></div>
          </div>
        )}
      </div>
    </>
  );
};

export default BackToTopWidget;