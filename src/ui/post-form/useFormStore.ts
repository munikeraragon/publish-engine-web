import create from 'zustand';
import { Tag } from '../article/Tags';

export interface MainImage {
    id: number;
    presignedUrl: string;
}

export interface FormState {
    postId: number | null;
    setPostId: (_: number | null) => void;

    previewShowing: boolean;
    setPreviewShowing: (_: boolean) => void;

    imageId: number | null;
    setImageId: (_: number | null) => void;
    imagesIds: Set<number>;
    setImagesIds: (_: Set<number>) => void;
    mainImageUrl: string;
    setMainImageUrl: (_: string) => void;
    mainImage: number | null;
    setMainImage: (_: number | null) => void;
    uploadImage: boolean;
    setUploadImage: (_: boolean) => void;

    title: string;
    setTitle: (_: string) => void;

    tagsString: string;
    setTagsString: (_: string) => void;

    tags: Tag[];
    setTags: (_: Tag[]) => void;

    description: string;
    setDescription: (_: string) => void;

    mainBody: string;
    setMainBody: (_: string) => void;

    publishing: boolean;
    setPublishing: (_: boolean) => void;

    updating: boolean;
    setUpdating: (_: boolean) => void;

    published: boolean;
    setPublished: (_: boolean) => void;
}

export const 
useFormStore = create<FormState>((set) => ({
    postId: null,
    setPostId: (arg: number | null) => set(() => ({ postId: arg })),

    previewShowing: false,
    setPreviewShowing: (arg: boolean) => set(() => ({ previewShowing: arg })),

    imageId: null,
    setImageId: (arg: number | null) => set(() => ({ imageId: arg })),
    mainImage: null,
    setMainImage: (arg: number | null) => set(() => ({ mainImage: arg })),
    mainImageUrl: '',
    setMainImageUrl: (arg: string) => set(() => ({ mainImageUrl: arg })),
    uploadImage: true,
    setUploadImage: (arg: boolean) => set(() => ({ uploadImage: arg })),
    imagesIds: new Set(),
    setImagesIds: (arg: Set<number>) => set(() => ({ imagesIds: arg })),

    title: '',
    setTitle: (arg: string) => set(() => ({ title: arg })),

    tags: [],
    setTags: (arg: Tag[]) => set(() => ({ tags: arg })),
    tagsString: '',
    setTagsString: (arg: string) => set(() => ({ tagsString: arg })),

    description: '',
    setDescription: (arg: string) => set(() => ({ description: arg })),

    mainBody: '',
    setMainBody: (arg: string) => set(() => ({ mainBody: arg })),

    publishing: true,
    setPublishing: (arg: boolean) => set(() => ({ publishing: arg })),

    updating: false,
    setUpdating: (arg: boolean) => set(() => ({ updating: arg })),

    published: false,
    setPublished: (arg: boolean) => set(() => ({ publishing: arg }))
}));
