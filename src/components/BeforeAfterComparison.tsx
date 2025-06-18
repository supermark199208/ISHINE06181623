import React, { useState, useRef, useEffect } from 'react';
import { MousePointer, ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfterComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [currentImageSet, setCurrentImageSet] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sample before/after image data
  const imageComparisonSets = [
    {
      before: {
        image: "https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Before Treatment"
      },
      after: {
        image: "https://images.pexels.com/photos/6663461/pexels-photo-6663461.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "After 8 Sessions"
      }
    },
    {
      before: {
        image: "https://images.pexels.com/photos/6663461/pexels-photo-6663461.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Before Treatment"
      },
      after: {
        image: "https://images.pexels.com/photos/6663459/pexels-photo-6663459.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "After 6 Sessions"
      }
    },
    {
      before: {
        image: "https://images.pexels.com/photos/5938393/pexels-photo-5938393.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Before Treatment"
      },
      after: {
        image: "https://images.pexels.com/photos/5938394/pexels-photo-5938394.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "After 10 Sessions"
      }
    }
  ];

  // 定义标签位置（百分比）
  const BEFORE_LABEL_LEFT = 5;   // Before标签左边缘
  const BEFORE_LABEL_RIGHT = 25; // Before标签右边缘
  const AFTER_LABEL_LEFT = 75;   // After标签左边缘
  const AFTER_LABEL_RIGHT = 95;  // After标签右边缘

  // 判断分割线位置区域
  const getSliderRegion = (position: number) => {
    if (position >= BEFORE_LABEL_LEFT && position <= BEFORE_LABEL_RIGHT) {
      return 'before-label';
    } else if (position >= AFTER_LABEL_LEFT && position <= AFTER_LABEL_RIGHT) {
      return 'after-label';
    } else if (position < BEFORE_LABEL_LEFT) {
      return 'left-edge';
    } else if (position > AFTER_LABEL_RIGHT) {
      return 'right-edge';
    } else if (position > BEFORE_LABEL_RIGHT && position < AFTER_LABEL_LEFT) {
      return 'middle';
    }
    return 'middle';
  };

  // 判断标签是否应该显示
  // 标签位置定义
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setSliderPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  };

  // 其他事件处理函数...

  const currentSet = imageComparisonSets[currentImageSet];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题和描述... */}
        
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing select-none"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Before 图层 (包含图片和模块1) */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={currentSet.before.image}
                alt="Before treatment"
                className="w-full h-full object-cover"
                draggable={false}
              />
              
              {/* 模块1 - 始终与before图片同层 */}
              {!isDragging && (
                <div 
                  className="absolute top-6 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg z-10"
                  style={{ left: `${BEFORE_LABEL_LEFT}%` }}
                >
                  BEFORE
                </div>
              )}
            </div>

            {/* After 图层 (包含图片和模块2) */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <img
                src={currentSet.after.image}
                alt="After treatment"
                className="w-full h-full object-cover"
                draggable={false}
              />
              
              {/* 模块2 - 始终与after图片同层 */}
              {!isDragging && (
                <div 
                  className="absolute top-6 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg z-10"
                  style={{ left: `${AFTER_LABEL_LEFT}%` }}
                >
                  AFTER
                </div>
              )}
            </div>

            {/* 分割线 (最上层) */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 transition-all duration-150 ease-out"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-110 transition-transform duration-200"
                onMouseDown={handleMouseDown}
              >
                <div className="flex space-x-1">
                  <div className="w-1 h-6 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-6 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* 导航控制... */}
          </div>
          
          {/* 其他UI元素... */}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterComparison;