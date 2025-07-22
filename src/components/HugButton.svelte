<script>
  // @ts-nocheck
  import { onMount } from 'svelte';

  let hugButton;
  let hugCount = 0; // 新增：我们的心动计数器！
  let buttonText = '抱我！'; // 新增：按钮上的甜言蜜语
  let isHugging = false; // 新增：一个状态，防止连续快速点击时文字错乱

  // 创建小爱心的函数保持不变
  function createHeart(e) {
    const heart = document.createElement('span');
    heart.classList.add('heart');
    hugButton.appendChild(heart);
    const rect = hugButton.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    const size = Math.random() * 80 + 20;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    setTimeout(() => {
      heart.remove();
    }, 1000);
  }

  // 点击按钮的函数升级啦！
  function onHug(e) {
    // 如果正在“拥抱”中，就先不处理新的点击，避免动画和文字错乱
    if (isHugging) return;

    isHugging = true;
    hugCount++; // 每次点击，计数器+1
    buttonText = '抱到啦！'; // 立刻给你甜蜜的回应！

    for (let i = 0; i < 5; i++) {
      createHeart(e);
    }

    // 0.8秒后，按钮文字恢复，可以再次拥抱
    setTimeout(() => {
      buttonText = '抱我！';
      isHugging = false;
    }, 800);
  }

  onMount(() => {
    // 组件加载后确保 hugButton 绑定到DOM元素
  });
</script>

<!-- HTML结构也升级了！ -->
<div class="hug-container">
  <button 
    bind:this={hugButton} 
    on:click={onHug} 
    class="hug-button"
    aria-label="抱抱按钮"
  >
    <!-- 文字现在是动态的啦 -->
    <span class="text">{buttonText}</span>
  </button>
  <!-- 这是我们的心动计数器 -->
  <div class="hug-counter">
    你已经被拥抱了 <span class="count">{hugCount}</span> 次
  </div>
</div>

<!-- CSS样式也变得更华丽了 -->
<style>
  .hug-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem; /* 按钮和计数器之间的间距 */
  }

  .hug-button {
    position: relative;
    overflow: hidden;
    /* 渐变色更梦幻了 */
    background: linear-gradient(145deg, #ff9a8b, #ff6a88, #ff99ac);
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem 2rem;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease; /* 过渡效果更全面 */
    /* 阴影更柔和、更大了 */
    box-shadow: 0 8px 30px rgba(255, 106, 136, 0.5);
    user-select: none;
  }

  .hug-button:hover {
    transform: scale(1.05) translateY(-2px); /* 悬浮时向上移动一点点 */
    box-shadow: 0 12px 40px rgba(255, 106, 136, 0.6);
  }

  .hug-button:active {
    transform: scale(0.98);
  }

  .text {
    position: relative;
    z-index: 10;
  }
  
  /* 计数器的样式 */
  .hug-counter {
    font-size: 0.9rem;
    color: #888;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    transition: color 0.3s;
  }

  .hug-counter .count {
    font-weight: bold;
    color: #ff6a88; /* 计数器的数字用主题色突出 */
    display: inline-block;
    min-width: 1.5ch; /* 保证数字宽度，避免跳动 */
    text-align: center;
  }

  /* 小爱心的样式保持不变 */
  :global(.heart) {
    position: absolute;
    background-color: #ffccd5;
    animation: fly-out 1s ease-out forwards;
    pointer-events: none;
  }

  :global(.heart::before),
  :global(.heart::after) {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: inherit;
    border-radius: 50%;
  }

  :global(.heart::before) {
    top: -50%;
    left: 0;
  }

  :global(.heart::after) {
    top: 0;
    left: -50%;
  }

  @keyframes fly-out {
    from {
      transform: rotate(45deg) scale(0);
      opacity: 1;
    }
    to {
      transform: translate(var(--tx, 0), -150px) rotate(45deg) scale(1);
      opacity: 0;
    }
  }
</style>