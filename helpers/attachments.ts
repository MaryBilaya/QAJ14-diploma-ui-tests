import type { TestInfo } from '@playwright/test';

export async function attachInfo(testInfo: TestInfo, name: string, data: string) {
    await testInfo.attach(name, {
        body: JSON.stringify(data, null, 2),
        contentType: 'application/json',
    });
}