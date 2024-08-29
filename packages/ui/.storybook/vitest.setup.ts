import { beforeAll } from 'vitest';
// Replace your-renderer with the renderer you are using (e.g., react, vue3, svelte, etc.)
import { setProjectAnnotations } from '@storybook/vue3';
import * as projectAnnotations from './preview';

const project = setProjectAnnotations(projectAnnotations);

beforeAll(project.beforeAll);
