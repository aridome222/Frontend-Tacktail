import supabase from '../../utils/supabase';

type uploadStorageProps = {
  file: File;
  bucketName: string;
  cocktailId: number;
  username: string;
};

type uploadPathname = {
  path: string;
};

export const uploadStorage = async ({
  file,
  bucketName,
  cocktailId,
  username,
}: uploadStorageProps): Promise<uploadPathname> => {
  // 引数に与えた username と cocktailId で誰の何のカクテルかを判別する。
  // TODO: アップロードされた画像と同じ拡張子でアップロードする処理の実装
  const pathName = `cocktails/${username}_${String(cocktailId)}.jpeg`;
  const { data, error } = await supabase.storage.from(bucketName).upload(pathName, file, {
    cacheControl: '3600',
    upsert: true,
  });
  console.log(data);
  if (error) throw error;
  return {
    path: data?.path ?? null,
  };
};
