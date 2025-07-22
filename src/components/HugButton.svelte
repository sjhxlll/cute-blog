<script>
  // @ts-nocheck
  import { onMount } from 'svelte';

  let hugButton; // 用来获取按钮元素

  // 这个函数用来创建一颗小爱心
  function createHeart(e) {
    const heart = document.createElement('span');
    heart.classList.add('heart');
    
    // 把小爱心添加到按钮内部
    hugButton.appendChild(heart);

    // 设置小爱心的初始位置为鼠标点击的地方
    // 我们要相对于按钮的位置，所以要减去按钮的左上角坐标
    const rect = hugButton.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    // 给小爱心一个随机的大小和动画时长，看起来更自然
    const size = Math.random() * 80 + 20; // 20px 到 100px
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // 动画结束后，就把小爱心从页面上移除，不然会越积越多哦
    setTimeout(() => {
      heart.remove();
    }, 1000); // 动画时长是1秒
  }

  // 点击按钮时，连续创建几个小爱心，更有爆发的感觉
  function onHug(e) {
    for (let i = 0; i < 5; i++) {
      createHeart(e);
    }
  }

  onMount(() => {
    // 组件加载后，确保 hugButton 已经绑定到DOM元素
  });
</script>

<!-- 这是按钮的HTML结构 -->
<!-- `bind:this={hugButton}` 是把这个button元素和我们script里的hugButton变量关联起来 -->
<!-- `on:click={onHug}` 是监听点击事件，点击时调用 onHug 函数 -->
<button 
  bind:this={hugButton} 
  on:click={onHug} 
  class="hug-button"
  aria-label="抱抱按钮"
>
  <span class="text">抱我！</span>
</button>

<!-- 这是按钮和爱心动画的CSS样式 -->
<style>
  .hug-button {
    /* 按钮基础样式 */
    position: relative; /* 这是为了让小爱心能相对于它定位 */
    overflow: hidden; /* 隐藏超出按钮范围的小爱心 */
    background: linear-gradient(145deg, #ff8a8a, #ff5252);
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem 2rem;
    border-radius: 9999px; /* 圆滚滚的边角 */
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 4px 15px rgba(255, 82, 82, 0.4);
    user-select: none; /* 防止双击选中文本 */
  }

  .hug-button:hover {
    transform: scale(1.05); /* 鼠标放上去时放大一点点 */
    box-shadow: 0 6px 20px rgba(255, 82, 82, 0.6);
  }

  .hug-button:active {
    transform: scale(0.98); /* 点击时缩小一点点 */
  }

  .text {
    position: relative;
    z-index: 10; /* 让文字在小爱心上面 */
  }

  /* 这是小爱心的样式 */
  /* 我们用 ::before 和 ::after 伪元素来画一个爱心形状 */
  :global(.heart) {
    position: absolute;
    background-color: #ffccd5; /* 粉嫩的颜色 */
    animation: fly-out 1s ease-out forwards;
    pointer-events: none; /* 让小爱心不会挡住鼠标事件 */
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

  /* 这是小爱心飞出去的动画 */
  @keyframes fly-out {
    from {
      transform: rotate(45deg) scale(0);
      opacity: 1;
    }
    to {
      /* 向上方和左右随机飞散 */
      transform: translate(var(--tx, 0), -150px) rotate(45deg) scale(1);
      opacity: 0;
    }
  }
</style>
```