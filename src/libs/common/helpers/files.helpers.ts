import { readdir, readFile, readFileSync } from 'fs';
import { promisify } from 'util';
import { resolve } from 'path';

const readdirAsync = promisify(readdir);
const readFileAsync = promisify(readFile);

export async function getDirectoryFilesList(path: string): Promise<string[]> {
  const filepath = resolve(process.cwd(), `./${path}`);
  return await readdirAsync(filepath);
}

export async function readFileAsUTF8(absFilePath: string): Promise<string> {
  return (await readFileAsync(absFilePath)).toString('utf-8');
}

export async function readFileAsBase64(absFilePath: string): Promise<string> {
  return (await readFileAsync(absFilePath)).toString('base64');
}

export function readFileAsUTF8Sync(absFilePath: string): string {
  return readFileSync(absFilePath).toString('utf-8');
}

export function readFileAsBase64Sync(absFilePath: string): string {
  return readFileSync(absFilePath).toString('base64');
}

