import { resolve } from 'path';

export default {
  alias: {
    '/@/': resolve(__dirname, 'src'),
    '/@components/': resolve(__dirname, 'src/components'),
    '/@layout/': resolve(__dirname, 'src/layout'),
    '/@plugin/': resolve(__dirname, 'src/plugin'),
    '/@img/': resolve(__dirname, 'src/assets/img'),
    '/@style/': resolve(__dirname, 'src/assets/style')
  }
};
